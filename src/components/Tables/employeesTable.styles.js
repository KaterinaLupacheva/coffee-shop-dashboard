export const employeesTableStyles = theme => ({
  root: {
    width: "100%"
  },
  head: {
    background: theme.palette.primary.main,
    color: theme.palette.text.white,
    fontWeight: "bold"
  },
  row: {
    "&:hover": {
      cursor: "pointer"
    }
  }
});
