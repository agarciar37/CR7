import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function Experience() {
  const showExperience = useSignal(false);

  return (
    <div class="experience text-center">
      <Button isActive={showExperience.value} onClick={() => (showExperience.value = !showExperience.value)} />

      {showExperience.value && (
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Sporting CP (2002 - 2003)</h2>
            <p>Ronaldo inició su carrera en el Sporting CP.
              Su debut profesional fue en 2002, donde rápidamente llamó la atención de clubes europeos.
              Jugo con el primer equipo con solo 17 años.
              Impresionó en un amistoso contra el Manchester United, lo que llevó a su fichaje por el club inglés.
              No gano ningún título con el equipo, ya que solo jugó una temporada.
            </p>
          </div>

          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Manchester United (2003 - 2009) y (2021 - 2022)</h2>
            <p>En el United se convirtió en estrella, ganando títulos de liga y su primer Balón de Oro.
              Durante este periodo gano 3 Premier League (2006-07, 2007-08, 2008-09). 
              Ganó su primera Champions League (2007-2008), marcando en la final.
              Ganó su primer Balón de Oro en 2008. Fue el máximo goleador de la Premier League en 2007-08 y 2008-09.
              También ganó la FA Cup en 2003-04, 2 Copas de la Liga y un Mundial de Clubes.
            </p>
          </div>

          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Real Madrid (2009 - 2018)</h2>
            <p>En el Real Madrid alcanzó su mejor nivel, ganando múltiples Champions League y estableciendo récords goleadores.
              Se convirtió en el máximo goleador de la historia del club (451 goles en 438 partidos) y de la Champions League.
              Ganó 4 Champions League (2013-14, 2015-16, 2016-17, 2017-18), marcando en las finales de 2014 y 2017.
              Ganó 2 Ligas (2011-12, 2016-17), 2 Copas del Rey, 2 Supercopas de España y 3 Mundiales de Clubes.
              Obtuvo 4 Balones de Oro (2013, 2014, 2016, 2017) y 3 Botas de Oro.
              Fue nombrado 4 veces Pichichi de la Liga (2010-11, 2013-14, 2014-15, 2015-16).
            </p>
          </div>

          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Juventus (2018 - 2021)</h2>
            <p>En la Juventus continuó su racha ganadora, logrando títulos de liga y siendo clave en el equipo.
              Ganó 2 Serie A (2018-19, 2019-20) y una Supercopa de Italia.
              Fue el máximo goleador de la Serie A en 2018-19.
              A pesar de no ganar la Champions League con la Juventus, fue un jugador clave en el equipo.
            </p>
          </div>

          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Al-Nassr (2023 - Presente)</h2>
            <p>Actualmente juega en Al-Nassr, llevando su talento al fútbol árabe.</p>
          </div>

          <div class="p-4 bg-white text-black rounded shadow-md">
            <h2 class="text-2xl font-bold">Selección de Portugal</h2>
            <p>Ganó el primer gran titulo de la Selección Portuguesa, la Eurocopa 2016. 
              Fue el máximo goleador del torneo y fue nombrado mejor jugador.
              Ganó la Liga de Naciones de la UEFA en 2019.
              Es el máximo goleador de la historia de la selección.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
