export const employeesTableStyles = (theme) => ({
  head: {
    background: theme.palette.primary.main,
    color: theme.palette.text.white,
    fontWeight: "bold",
  },
  row: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});
