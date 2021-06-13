export const employeeFormStyles = theme => ({
  container: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.card
  },
  root: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  field: {
    width: "25ch"
  },
  fieldFontSize: {
    fontSize: 20
  }
});
