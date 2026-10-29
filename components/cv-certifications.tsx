import { CVDetailCard } from "@/components/cv-detail-card"

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    link: "https://www.credly.com/badges/c286eb67-85e3-4faa-b076-db4e8e695936/public_url",
    description: "" //"SAA-C03 validates knowledge of designing secure, resilient, high-performing cloud architectures and optimizing costs using the AWS Well-Architected Framework.",
  },
  {
    name: "AWS Certified AI Practitioner",
    link: "https://www.credly.com/badges/15f3b9e5-49ea-411b-9423-9a5921b1ad45/public_url",
    description: "" //"AIF-C01 validates foundational knowledge of artificial intelligence, machine learning, generative AI, foundation models, and responsible AI practices, including Amazon Bedrock, and Amazon SageMaker.",
  },
]

export function CVCertifications() {
  return (
    <section className="cv-certifications">
      <h2 className="text-title font-semibold text-foreground">Certifications</h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {certifications.map((entry) => (
          <CVDetailCard key={entry.link} title={entry.name} description={entry.description} link={entry.link} linkLabel="See credential" logo="/logos/aws.jpeg" />
        ))}
      </div>
    </section>
  )
}
