import { GraduationCap } from "lucide-react"
import { PlatformDetailCard } from "@/components/platforms/PlatformDetailCard"

export default function EduConnectPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <PlatformDetailCard
        id="educonnect"
        badge="🎓 EdTech Infrastructure"
        title="EduConnect"
        tagline="Smart Education Infrastructure System"
        description="EduConnect provides a unified digital backbone for managing school operations at scale. Designed for state ministries and educational institutions, it brings structure and real-time visibility to education systems."
        imageSrc="/images/educonnect.png"
        capabilities={[
          "Teacher deployment and transfer system",
          "Student enrollment and records management",
          "Attendance tracking",
          "School resource and inventory tracking",
          "Academic performance monitoring",
          "Ministry dashboards and reporting"
        ]}
        gradientColor="accent"
        align="left"
      />
    </div>
  )
}
