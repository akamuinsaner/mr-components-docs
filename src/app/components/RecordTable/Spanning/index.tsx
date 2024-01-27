import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn } from '@akamuinsaner/mr-components/RecordTable';

interface DataType {
    key: string;
    name: string;
    age: number;
    tel: string;
    phone: number;
    address: string;
}

const sharedOnCell = (_: DataType, index: number) => {
    if (index === 1) {
      return { colSpan: 0 };
    }
  
    return {};
  };

const columns: RecordTableColumn<DataType>[] = [
    {
        key: 'key',
        title: 'RowHead',
        dataIndex: 'key',
    },
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
        onCell: (_, index) => ({
            colSpan: index === 1 ? 5 : 1,
        }),
    },
    {
        key: 'age',
        title: 'Age',
        dataIndex: 'age',
        onCell: sharedOnCell,
    },
    {
        key: 'tel',
        title: 'Home phone',
        colSpan: 2,
        align: 'center',
        dataIndex: 'tel',
        onCell: (_, index) => {
            if (index === 3) {
                return { rowSpan: 2 };
            }
            // These two are merged into above cell
            if (index === 4) {
                return { rowSpan: 0 };
            }
            if (index === 1) {
                return { colSpan: 0 };
            }

            return {};
        },
    },
    {
        key: 'phone',
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        onCell: sharedOnCell,
    },
    {
        key: 'address',
        title: 'Address',
        dataIndex: 'address',
        onCell: sharedOnCell,
    },
];

const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    },
  ];

export default function Spanning() {
    return (
        <RecordTable
            columns={columns}
            dataSource={data}
        />
    )
}