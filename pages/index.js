import { useQuery, gql } from "@apollo/client";

const TRAER_TRATAMIENTOS = gql`
  query {
    tratamientos {
      id
      titulo
      imagen {
        url
      }
      descripcion
      categorias {
        id
        nombre
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(TRAER_TRATAMIENTOS);
  console.log(loading, error, data);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un Error</p>;

  return data.tratamientos.map(({ titulo, imagen, descripcion }) => {
    return (
      <div>
        <h1>{titulo}</h1>
        <img src={"http://localhost:1337" + imagen.url} />
        <p>{descripcion}</p>
      </div>
    );
  });
}
