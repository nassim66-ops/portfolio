const NavBarItems = (link) => {
  return (
    <li className={link.className} onClick={link.onClick}>
      <a href={`#${link.link.id}`}> {link.link.title}</a>
    </li>
  );
};

export default NavBarItems;
