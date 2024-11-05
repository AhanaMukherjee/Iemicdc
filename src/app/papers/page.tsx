import { Container } from "@/components/Container";
import { Separator } from "@/components/Separator";

const Track = ({ title, list }: { title: string; list: Array<string> }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-primary mt-10">{title}</h1>
      <Separator />
      <ul className=" list-disc mt-6 text-gray-700">
        {list.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default function Papers() {
  return (
    <Container className=" py-10 flex flex-col items-center justify-start gap-10 animate-animate-appear">
      <div className="w-[80%]">
        <h3 className="text-lg">
          Topic of interest includes, though not limited to:
        </h3>
        <Track
          title="Track 1: AI And Robotics"
          list={[
            "Expert Systems",
            "Fuzzy Sets and Systems",
            "AI in Modelling and Simulation",
            "Machine Learning",
            "Deep Learning",
            "Intelligent devices and",
            "instruments",
            "AI in Scheduling and",
            "Optimization",
            "Quantum Machine Learning",
            "Evolutionary Design",
            "Knowledge representation",
            "Robotics",
            "Multi-Robot systems",
            "Robot learning and adaptation",
            "Coordination in robotics",
            "Bio Informatics",
            "Biomedical sensor & robotics",
            "Heuristic Algorithms",
            "Bio Inspired Algorithms",
            "Evolutionary Algorithms",
            "Brain Computer Interface",
          ]}
        />

        <Track
          title="Track 2: Image processing and NLP"
          list={[
            "Image Processing",
            "Speech & music processing",
            "3D and Video Processing",
            "Pattern Recognition",
            "Virtual and Augmented Reality",
            "Computational Linguistics &",
            "NLP Dialog Systems",
            "Graph, deep-learning-based",
            "methods of NLP and IR",
            "Information Extraction,",
            "Retrieval",
            "Opinion, personality and",
            "emotion detection in social",
            "media",
            "Color, Multi-spectral, and",
            "Hyper-spectral Imaging",
            "Image & Video Interpretation",
            "and Understanding",
            "Stereoscopic, Multi-view,",
            "Detection, Recognition,",
            "Retrieval, and Classification",
            "Image & Video Quality Models",
            "Biometrics, Forensics, and",
            "Security",
            "Biomedical and Biological",
            "Image Processing",
          ]}
        />

        <Track
          title="Track 3: Network Cloud and Big Data"
          list={[
            "Big Data Analytics and Social",
            "Networking",
            "Recent Trends in ICT",
            "Cloud Architecture and",
            "applications",
            "Service-Oriented Architecture",
            "in Cloud Computing",
            "Cloud based parallel Processing",
            "Mobile Clouds",
            "Data Mining and Analytics",
            "AIML applications in Big Data",
            "Data Visualization",
            "5G and 6G beyond networks",
            "Low Power Wide Area (LPWA)",
            "networks",
            "Next generation networks",
            "NFV, RAN, Cloud-RAN, and",
            "Fog-RAN",
            "Software Defined Radio (SDR),",
            "Cognitive Radio",
            "(D2D) and (M2M)",
            "communications",
            "LoRa, Sigfox, NB-IoT",
            "WPAN",
          ]}
        />

        <Track
          title="Track 4: Cyber security, Blockchain and IoT"
          list={[
            "Networking Protocol",
            "Architecture",
            "Security and privacy",
            "Malware attacks,",
            "Digital forensics",
            "Blockchain, and cryptocurrency",
            "Quantum cryptography",
            "AI & Sensors",
            "Brain Computing Interface",
            "Recent Trends in ICT",
            "Contemporary research in the",
            "field of ICT",
            "Industry 4.0/5.0 and Industrial",
            "IoT",
            "Healthcare data privacy",
            "Biometric-based authentication",
            "systems",
            "Multi-factor-based authentication",
            "Passwordless authentication",
            "systems",
            "Smart cities, smart farming, e-",
            "health, and home automation",
            "applications",
            "Privacy-preserving",
            "communication",
          ]}
        />
      </div>
    </Container>
  );
}
