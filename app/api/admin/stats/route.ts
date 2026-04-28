import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Venue from '@/models/Venue';
import Caterer from '@/models/Caterer';
import Media from '@/models/Media';
import Category from '@/models/Category';
import GalleryItem from '@/models/Gallery';

export async function GET() {
  try {
    await dbConnect();
    
    const [venues, caterers, media, galleryItems, categories] = await Promise.all([
      Venue.countDocuments(),
      Caterer.countDocuments(),
      Media.countDocuments(),
      GalleryItem.countDocuments(),
      Category.countDocuments(),
    ]);

    return NextResponse.json({
      venues,
      caterers,
      media,
      galleryItems,
      categories,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch dashboard stats' }, { status: 500 });
  }
}
