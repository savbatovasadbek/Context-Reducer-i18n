import { Button } from "../../components/ui/button";
import { translationKey } from "../../translation/translationKey/translationKey";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <div>
      <div className="container">
        <div>
          <h1>{t(translationKey["Welcome to React"])}</h1>
        </div>
        <Button onClick={() => changeLanguage("en")}>En</Button>
        <Button onClick={() => changeLanguage("ru")}>ru</Button>
        <Button onClick={() => changeLanguage("uz")}>UZ</Button>
        <div className="">
          <Link to="/order">Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
