const produtos = document.querySelectorAll(".produto");
const ordenacao = document.getElementById("ordenacao");

document.querySelectorAll(".menu-link[data-filter]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const categoria = link.dataset.filter;

    document.querySelectorAll(".menu-link").forEach((l) => {
      l.classList.remove("ativo");
    });

    link.classList.add("ativo");

    produtos.forEach((produto) => {
      const categoryProduto = produto.dataset.category;
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const botoesFiltro = document.querySelectorAll("[data-filter]");
  const produtos = document.querySelectorAll(".produto");

      const categoriaSelecionada = botao.getAttribute("data-filter");

      produtos.forEach((produto) => {
        const categoriaProduto = produto.getAttribute("data-category");

        if (
          categoriaSelecionada === "todos" ||
          categoriaProduto === categoriaSelecionada
        ) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });
    });
