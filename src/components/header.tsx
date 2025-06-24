import { Box, Grid, Typography } from "@mui/material";
import githubMarkWhiteLogo from "/github-mark-white.svg";
import styles from "./header.module.css";

export default function Header() {
    return (
        <Box component="header" sx={{ bgcolor: "#183D4E", color: "#FFFFFF",}}>
            <Grid container direction="row" sx={{ padding: "16px", justifyContent: "space-between", alignItems: "center", flexWrap: "nowrap" }}>
                <Grid size={12}>
                    <Typography variant="h4" align="center">
                        RGB PLAYGROUND
                    </Typography>
                </Grid>
                <Grid size={1}>
                    <a href="https://github.com/haymanmk/rgb_playground.git" target="_blank" rel="noopener noreferrer">
                        <img className={styles["github-logo"]} src={githubMarkWhiteLogo} alt="GitHub Logo" />
                    </a>
                </Grid>
            </Grid>
        </Box>
    );
}