import NavBar from "../NavBar/NavBar";
import BackgroundSection from "../BackgroundSection/BackgroundSection";

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
