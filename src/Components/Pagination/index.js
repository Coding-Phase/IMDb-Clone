import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

export default function BasicPagination({ totalPages, currentPage, paginate }) {
	const [totalPage, setTotalPages] = React.useState();
	React.useEffect(() => {
		if (totalPages > 999) {
			setTotalPages(Math.ceil(totalPages / 100));
		} else {
			if (totalPages > 499) {
				setTotalPages(totalPages / 50);
			} else {
				setTotalPages(totalPages);
			}
		}
	}, [totalPages]);

	return (
		<Stack spacing={2} className="mb-4">
			<CustomPagination
				count={totalPage}
				page={currentPage}
				color="primary"
				variant="outlined"
				onChange={(e, value) => paginate(value)}
			/>
		</Stack>
	);
}

const CustomPagination = styled(Pagination)`
	.MuiPagination-ul {
		justify-content: center;
	}

	.MuiButtonBase-root {
		color: #fff;
		border: 1px solid rgba(217, 119, 6, 0.5);
	}

	.Mui-selected {
		color: #fff !important;
		font-weight: 500;
		border: none !important;
		background-color: rgba(217, 119, 6, 0.5) !important;
	}
`;
