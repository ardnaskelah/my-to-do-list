import { ListItemText, styled, TextField } from "@mui/material";

export const ListItemStyled = styled(ListItemText)`
	.MuiTypography-root {
		max-width: calc(100% - 30px);
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;


