
import { Button, Footer, Header } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex text-center font-semibold flex-col items-center justify-center h-full gap-2">
        <Button />
      </div>
      <Footer />
    </div>
  );
}
