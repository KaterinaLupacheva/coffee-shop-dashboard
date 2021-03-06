export const employeeImageCardStyles = (theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  root: {
    backgroundColor: theme.palette.background.card,
  },
  imageName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    margin: theme.spacing(2),
  },
  pos: {
    marginTop: 12,
  },
  button: {
    background: theme.palette.background.card,
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
});
