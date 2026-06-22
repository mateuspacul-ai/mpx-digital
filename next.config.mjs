/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  // Não trava a publicação por avisos de lint (deixa o deploy tranquilo).
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Permite servir os SVGs de assinatura com segurança.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
