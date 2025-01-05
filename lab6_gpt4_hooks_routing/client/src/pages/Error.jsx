import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#F76C6C", fontSize: "48px" }}>Упс!</h1>
      <p style={{ fontSize: "24px", margin: "10px 0" }}>
        Извините, произошла непредвиденная ошибка.
      </p>
      <p>
        <i style={{ fontSize: "18px", color: "#8b8b8b" }}>
          {error.statusText || error.message}
        </i>
      </p>
      <p style={{ fontSize: "16px", marginTop: "20px" }}>
        Пожалуйста, попробуйте перезагрузить страницу или вернуться на главную.
      </p>
    </div>
  );
};

export default ErrorPage;
