import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPages, page, paginate }) {
	return (
		<Stack spacing={2}>
			<Pagination
				count={totalPages}
				page={page}
				color="primary"
				onChange={(e, value) => paginate(value)}
			/>
		</Stack>
	);
}
