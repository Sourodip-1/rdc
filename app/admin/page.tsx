"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileCheck, AlertCircle, Loader2, ChevronRight, Image as ImageIcon, Video, X } from "lucide-react";

export default function AdminUploadPanel() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Gallery");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async (file: File) => {
    if (!file) return;

    setLoading(true);
    setError("");
    setUrl("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setUrl(data.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    handleUpload(file);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#FF6B4A]/30 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6B4A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Admin Command Center</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tighter">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] to-[#ff9d85]">Gallery</span>
          </h1>
          <p className="text-white/40 text-lg max-w-lg mx-auto font-medium">
            Seamlessly upload premium content for Venues, Caterers, and the Royal Gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Main Upload Area */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B4A] to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[#161616]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Category Selection */}
                <div className="grid grid-cols-3 gap-3">
                  {['Venues', 'Caterer', 'Gallery'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                        category === cat 
                        ? 'bg-[#FF6B4A] border-[#FF6B4A] text-white shadow-[0_0_20px_rgba(255,107,74,0.3)]' 
                        : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Dropzone */}
                <div 
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) handleUpload(e.dataTransfer.files[0]); }}
                  className={`relative h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                    dragActive ? 'border-[#FF6B4A] bg-[#FF6B4A]/5 scale-[0.99]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <input 
                    type="file" 
                    name="file"
                    id="file-upload"
                    accept="image/*,video/*"
                    onChange={(e) => { if (e.target.files?.[0]) handleUpload(e.target.files[0]); }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  
                  <div className="p-4 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 transition-transform">
                    {loading ? (
                      <Loader2 className="w-10 h-10 text-[#FF6B4A] animate-spin" />
                    ) : (
                      <Upload className="w-10 h-10 text-[#FF6B4A]" />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-white/80 font-bold text-lg mb-1">
                      {loading ? 'Uploading Magic...' : 'Drop your masterpiece here'}
                    </p>
                    <p className="text-white/40 text-sm font-medium">
                      PNG, JPG, MP4 or WEBM up to 50MB
                    </p>
                  </div>
                </div>

                {/* Status/Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-500"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-bold">{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                      <ImageIcon className="w-4 h-4" /> Images
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                      <Video className="w-4 h-4" /> Videos
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Preview */}
        <AnimatePresence>
          {url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mt-12 p-2 bg-white/5 border border-white/10 rounded-[2.5rem] relative group"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-video sm:aspect-auto">
                {url.match(/\.(mp4|webm|ogg)$/i) ? (
                  <video src={url} controls className="w-full h-full max-h-[500px] object-cover" />
                ) : (
                  <img src={url} alt="Uploaded content" className="w-full h-full max-h-[500px] object-cover" />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Upload Successful</p>
                      <p className="text-white/40 text-xs font-medium truncate max-w-[200px]">{url}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setUrl("")}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FF6B4A] font-bold text-sm transition-colors group"
          >
            Return to Homepage
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

