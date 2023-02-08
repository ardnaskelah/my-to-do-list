import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

export const AppWrapper = styled("div")`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	height: 100vh;
	align-items: center;
	text-align: center;
	background-image:linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;

export const ListWrapper = styled(Paper)`
	padding: 12px;
`;

export const StyledTypography = styled(Typography)`
color: royalblue;
`
