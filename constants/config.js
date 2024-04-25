const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://localhost:3000",
    "https://chatapp-frontend-swart.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionSuccessStatus:200
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
