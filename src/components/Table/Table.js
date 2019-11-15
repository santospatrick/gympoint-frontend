import React from 'react';
import PropTypes from 'prop-types';

import { Container, EditButton, DeleteButton } from './styles';

function Table({ rows, data, onClickEdit, onClickDelete, keyExtractor }) {
    if (!data.length) return null;

    const cell = ({ row, item }) => {
        if (row.render) {
            return row.render(item);
        }
        if (typeof row.attribute === 'string') {
            return item[row.attribute];
        }
        return row.attribute(item);
    };

    return (
        <Container>
            <thead>
                <tr>
                    {rows.map(row => (
                        <th
                            key={`header-${row.label}`}
                            style={{
                                textAlign: row.align || 'left',
                            }}
                        >
                            {row.label}
                        </th>
                    ))}
                    <th />
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={keyExtractor(item)}>
                        {rows.map(row => (
                            <td
                                key={`data-${row.label}-${item.id}`}
                                style={{
                                    textAlign: row.align || 'left',
                                }}
                            >
                                {cell({ row, item })}
                            </td>
                        ))}
                        <td>
                            <div>
                                <EditButton onClick={() => onClickEdit(item)}>
                                    editar
                                </EditButton>
                                <DeleteButton
                                    onClick={() => onClickDelete(item)}
                                >
                                    apagar
                                </DeleteButton>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Container>
    );
}

Table.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            attribute: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
                .isRequired,
        }),
    ),
    data: PropTypes.array,
    onClickEdit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    keyExtractor: PropTypes.func.isRequired,
};

Table.defaultProps = {
    rows: [],
    data: [],
};

export default Table;
