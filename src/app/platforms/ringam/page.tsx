import { Video } from "lucide-react"
import { PlatformDetailCard } from "@/components/platforms/PlatformDetailCard"

export default function RingAmPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-white dark:bg-[#0D1117]">
      <PlatformDetailCard
        id="ringam"
        badge="🌍 Global Platform"
        title="RingAm"
        tagline="Digital Connection Platform for Celebrities & Professionals"
        description="RingAm allows fans, clients, and learners to connect directly with verified celebrities, influencers, experts, and professionals through paid video and audio sessions. Built for authentic engagement and digital talent monetization."
        imageSrc="/images/ringam.png"
        capabilities={[
          "Verified celebrity/professional profiles",
          "HD video & audio session infrastructure",
          "Secure payment processing",
          "Smart scheduling with calendar sync",
          "Multi-currency support",
          "Revenue analytics for talent"
        ]}
        gradientColor="secondary"
        align="left"
      />
    </div>
  )
}
