"use client";
import { useState } from "react";

export default function AdminUploadPanel() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Gallery");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const file = e.target.file.files[0];
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

  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center pt-32">
      <h1 className="text-4xl font-bold mb-8">Admin Panel - Upload Media</h1>
      
      <form onSubmit={handleUpload} className="bg-zinc-900 p-8 rounded-xl flex flex-col gap-6 w-full max-w-md border border-zinc-800">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-zinc-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Venues">Venues</option>
            <option value="Caterer">Caterer</option>
            <option value="Gallery">Gallery</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select File (Photo/Video)</label>
          <input 
            type="file" 
            name="file"
            accept="image/*,video/*"
            className="w-full bg-zinc-800 text-white p-2 rounded-lg outline-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>

      {url && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">Upload Successful!</h2>
          <p className="text-zinc-400 break-all max-w-xl text-center">{url}</p>
          {url.match(/\.(mp4|webm|ogg)$/i) ? (
            <video src={url} controls className="max-w-md rounded-xl shadow-lg border border-zinc-800" />
          ) : (
            <img src={url} alt="Uploaded" className="max-w-md rounded-xl shadow-lg border border-zinc-800" />
          )}
        </div>
      )}
    </div>
  );
}
