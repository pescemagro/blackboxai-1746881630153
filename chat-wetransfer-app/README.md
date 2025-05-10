# Chat WeTransfer App - Worldwide Peer-to-Peer Encrypted Chat

This is a local web application for end-to-end encrypted peer-to-peer chat conversations with code sharing similar to WeTransfer. It is optimized to work worldwide, including on Android devices.

## Features

- End-to-end encryption using ECDSA keys and AES-GCM encryption
- Message signing and verification for authenticity
- Blockchain-like message history with proof of work for integrity
- Real-time peer-to-peer chat using WebRTC with signaling server
- Generate and share unique chat room codes for connection
- Responsive UI with Tailwind CSS, Google Fonts, and Font Awesome
- Works worldwide over the internet with NAT traversal using STUN servers

## Setup and Run

1. Make sure you have Node.js installed on your machine.

2. Install dependencies:

```bash
npm install
```

3. Start the signaling server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

5. Share the generated code with your chat partner anywhere in the world.

6. Both users open the app, enter the same code, and establish a secure peer-to-peer connection.

## Usage

- Click "Generate Code" to create a unique chat room code.
- Share the code with others to join the same chat room.
- Start chatting in real-time with end-to-end encryption.
- Messages are signed and verified for authenticity.
- Message history is maintained with blockchain-like proof of work.

## Notes

- The app uses WebRTC for peer-to-peer communication with signaling via the server.
- STUN servers are used for NAT traversal; TURN servers can be added if needed.
- The app uses Web Crypto API, so use modern browsers that support it.
- Proof of work mining may cause slight delays when sending messages.
- For Android packaging, wrap the frontend in a WebView and use Gradle to build the APK.

## License

MIT License
