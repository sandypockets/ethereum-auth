import NavBar from "../components/NavBar/NavBar";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";

export default function Home() {
  return (
    <div>

      <header>
        <NavBar />
      </header>

      <main>
        <BackgroundSection color={'light'} />
        <BackgroundSection color={'dark'} />
        <BackgroundSection color={'light'} />
      </main>

    </div>
  )
}
