import { Server } from "lucide-react"
import { PlatformDetailCard } from "@/components/platforms/PlatformDetailCard"

export default function UrosPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <PlatformDetailCard
        id="uros"
        badge="⭐ Flagship Platform"
        title="UROS"
        tagline="Unified Resource & Operations Suite"
        description="UROS is a powerful digital operations suite that helps organizations manage complex workflows, coordinate resources, and improve real-time operational efficiency. Built modular and scalable to adapt to enterprise and government needs."
        imageSrc="/images/uros.png"
        capabilities={[
          "Workflow automation engine",
          "Resource and task coordination",
          "Multi-location operations visibility",
          "AI-supported intelligent routing",
          "Real-time collaboration tools",
          "Enterprise dashboards"
        ]}
        gradientColor="primary"
        align="left"
      />
    </div>
  )
}
