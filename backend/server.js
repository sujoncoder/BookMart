import app from "./app.js";
import { PORT } from "./src/config/constant.js";
import connectDB from "./src/config/db.js";


// APPLICATION LISTENING
app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`)
    await connectDB();
});