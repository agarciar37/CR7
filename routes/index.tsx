import Experience from "../islands/Experience.tsx";

export default function Home() {
  return (
    <div class="container">
      <div class="profile">
        <img src="cr7.jpg" alt="Cristiano Ronaldo" />
        <div class="profile-text">
          <h1 class="text-4xl font-bold">Cristiano Ronaldo</h1>
          <p>
            Cristiano Ronaldo dos Santos Aveiro es el mejor futbolista de la historia. Ha jugado con múltiples clubes, 
            pero el más importante es el Real Madrid, donde ganó 4 Champions League y 4 Balones de Oro.
          </p>
          <div class="flex gap-6 mt-4 social-icons">
            <a href="https://www.instagram.com/cristiano" target="_blank">
              <img src="instagram.ico" alt="Instagram" />
            </a>
            <a href="https://twitter.com/Cristiano" target="_blank">
              <img src="twitter.ico" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/Cristiano" target="_blank">
              <img src="facebook.ico" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Sección de experiencia laboral */}
      <Experience />
    </div>
  );
}
