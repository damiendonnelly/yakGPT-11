import ChatDisplay from "@/components/ChatDisplay";
import Hero from "@/components/Hero";
import { useChatStore } from "@/stores/ChatStore";

export default function Home() {
  const apiKeyOpenAI = useChatStore((state) => state.apiKey);
  const apiKeyElevenLabs = useChatStore((state) => state.apiKey11Labs);

  return apiKeyOpenAI && apiKeyElevenLabs ? <ChatDisplay /> : <Hero />;
}