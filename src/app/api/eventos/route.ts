export const GET = () => {
  const eventos = [
    {
      id: 1,
      title: "Dia de Ação Comunitária Contra Queimadas",
      describe:
        "Participe de mutirões para limpar áreas de risco e criar faixas de proteção. Inclui oficinas práticas e atividades educativas para a comunidade.",
      data: "15/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
    {
      id: 2,
      title: "Feira de Conscientização Ambiental",
      describe:
        "Feira com exposições e palestras sobre prevenção de queimadas. Atividades interativas e recursos educativos para engajar e informar o público local.",
      data: "16/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
    {
      id: 3,
      title: "Caminhada Ecológica e Plantio de Árvores",
      describe:
        "Junte-se a uma caminhada ecológica e ajude no plantio de árvores para restaurar áreas afetadas. Envolva-se com sua comunidade na proteção ambiental.",
      data: "17/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
  ];

  return Response.json(eventos)
}