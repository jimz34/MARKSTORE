/*
  # Create products table and storage bucket

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `nama` (text, product name)
      - `harga` (bigint, price in IDR)
      - `deskripsi` (text, product description)
      - `kategori` (text, product category)
      - `gambar` (text, image URL)
      - `badge_best_seller` (boolean, best seller badge)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `products` table
    - Public can read products
    - Only authenticated users can insert, update, delete

  3. Storage
    - Create product-images bucket for image uploads
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama text NOT NULL,
  harga bigint NOT NULL DEFAULT 0,
  deskripsi text DEFAULT '',
  kategori text DEFAULT 'Lainnya',
  gambar text DEFAULT '',
  badge_best_seller boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- Insert bucket for product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public to read product images
CREATE POLICY "Public can view product images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'product-images');

-- Allow authenticated users to upload product images
CREATE POLICY "Authenticated users can upload product images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-images');

-- Allow authenticated users to update product images
CREATE POLICY "Authenticated users can update product images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-images')
  WITH CHECK (bucket_id = 'product-images');

-- Allow authenticated users to delete product images
CREATE POLICY "Authenticated users can delete product images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-images');
