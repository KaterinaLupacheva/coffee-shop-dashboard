export const chartStyles = (theme) => ({
  container: {
    width: "80vw",
    margin: "0 auto",
  },
  options: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  field: {
    width: "25ch",
    margin: theme.spacing(1),
  },
  fieldFontSize: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  dateField: {
    color: theme.palette.primary.main,
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
  },
  legendItem: {
    padding: theme.spacing(1),
  },
});
