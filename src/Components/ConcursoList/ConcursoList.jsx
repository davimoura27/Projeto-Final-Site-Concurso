// import UseConcursos from "../../hooks/UseConcurso";

// const ConcursoList = () => {
//   const { concursos, loading } = UseConcursos();

//   if (loading) return <p>Carregando...</p>;

//   return (
//     <div>
//       <h1>Lista de Concursos</h1>

//       <ul>
//         {concursos.map((concurso, index) => (
//           <li key={index}>
//             <a href={concurso.link} target="_blank" rel="noopener noreferrer">
//               {concurso.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ConcursoList;

import UseConcursos from "../../hooks/UseConcurso";
import styles from "./ConcursoList.module.css"; // Novo import

const ConcursoList = () => {
  const { concursos, loading } = UseConcursos();

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Concursos</h1>

      <div className={styles.concursoGrid}>
        {concursos.map((concurso, index) => (
          <div key={index} className={styles.concursoCard}>
            <a
              href={concurso.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.concursoLink}
            >
              <h3 className={styles.concursoName}>{concurso.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcursoList;
