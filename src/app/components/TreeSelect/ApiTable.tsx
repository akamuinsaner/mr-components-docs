import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Link } from '@mui/material';

export default () => {
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>property</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>datatype</TableCell>
                        <TableCell>default</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>allowClear</TableCell>
                        <TableCell>show clear icon when options selected and hovering at the same time</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>checkable</TableCell>
                        <TableCell>realise multiple select function through Checkbox</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>expandAll</TableCell>
                        <TableCell>default open all the tree leafs</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>expandKeys</TableCell>
                        <TableCell>default open specific tree leafs</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>{'Array<number | string>'}</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>loadData</TableCell>
                        <TableCell>allow loading data asychorously from remote</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>
                            (o: {<Link>option</Link>}) =&gt; Promise&lt;{<Link>option</Link>}[]&gt;
                        </TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>maxTagCount</TableCell>
                        <TableCell>limit the tags show when select multiple values,
                            if responsive, the number of show tags changes with the changing of container width
                        </TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>number | 'responsive'</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>multiple</TableCell>
                        <TableCell>allow multiple select</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>onChange</TableCell>
                        <TableCell>callback fired when select data</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>{`(value: any) => void`}</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>options</TableCell>
                        <TableCell>data of selected options</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}><Link>option</Link>[]</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>placement</TableCell>
                        <TableCell>the placement of Popper box</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>PopperPlacementType</TableCell>
                        <TableCell>bottom-left</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>popperClassName</TableCell>
                        <TableCell>custom classNames of Popper box</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>string</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>popperStyle</TableCell>
                        <TableCell>custom styles of Popper box</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>React.CSSProperties</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>search</TableCell>
                        <TableCell>allow filtering options through user input</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>search</TableCell>
                        <TableCell>allow filtering options through user input</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>boolean</TableCell>
                        <TableCell>false</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>value</TableCell>
                        <TableCell>to use TreeSelect as controlled component</TableCell>
                        <TableCell sx={{ color: '#c41d7f' }}>any</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>

    )
}