export const productPageStyles = (theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
});
