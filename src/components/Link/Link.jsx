import css from './Link.module.css';

const Link = ({ href, alt, text }) => {
  return (
    <div className={`${css.link} ${css.btn}`}>
      <a href={href} alt={alt}>
        {text}
      </a>
    </div>
  );
};

export default Link;
