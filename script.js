// 菜单栏控制
const menuItems = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', (e) => {
    e.preventDefault();
    // 选中菜单项
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('selected');
    });
    menuItem.classList.add('selected');

    // 显示对应内容
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    sections[index].style.display = 'block';
  });
});