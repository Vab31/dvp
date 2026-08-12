// components/UdifyChatbot.jsx
export default function UdifyChatbot() {
  return (
    <div className="w-full h-[700px] rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src="https://udify.app/chatbot/b2MKI5KLRRbVE6Rh"
        style={{ width: '100%', height: '100%', minHeight: '700px' }}
        frameBorder="0"
        allow="microphone; clipboard-write"
        title="Udify AI Chatbot"
      />
    </div>
  );
}