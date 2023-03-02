import { useFetch } from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/photos";

function Photos() {
    const { loading, photos } = useFetch(url);
    return (
        <>
            <h1>Github</h1>
            <ul>
                {loading
                    ? "loading"
                    : photos.map((item) => {
                          const { id, title, url, thumbnailUrl } = item;
                          return (
                              <li className="item d-flex" key={id}>
                                  <img src={thumbnailUrl} alt={title} />
                                  <div className="d-flex">
                                      <h2>{title}</h2>
                                      <a href={url}>profile</a>
                                  </div>
                              </li>
                          );
                      })}
            </ul>
        </>
    );
}

export default Photos;
