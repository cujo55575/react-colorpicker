function up() {}
function down(size) {
  const sizes = {
    xs: "575.98px",
    sm: "767.98px",
    md: "991.98px",
    lg: "1199.98px",
    xl: "1600px",
    xxl: "1920px",
    xxxl: "2560px",
    xxxxl: "3440px",
    xxxxxl: "3840px",
  };
  return `@media (max-width: ${sizes[size]})`;
}
export { up, down };
