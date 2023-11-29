import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

interface Props {
    totalPage: number;
    perPage: number;
    currentPage: number;
    setPage: (a: number) => void;
}

const CustomPagination = ({ setPage, perPage, totalPage, currentPage }: Props) => {
    const handleTotalPages = () => {
        if (totalPage && perPage) {
            return Math.ceil(totalPage / perPage);
        } else {
            return 0;
        }
    };

    const [activePage, setActivePage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    
    useEffect(() => {
        if (currentPage) {
            setActivePage(currentPage);
            setTotalPages(handleTotalPages());
        }
    }, [currentPage, totalPage, perPage]);

    const items = [];
    const ellipsis = <Pagination.Ellipsis />;
    const firstPage = <Pagination.First onClick={() => setPage(1)} />;
    const lastPage = <Pagination.Last onClick={() => setPage(totalPages)} />;
    const prevPage = (
        <Pagination.Prev
            onClick={() => setPage(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={activePage === 1}
        />
    );
    const nextPage = (
        <Pagination.Next
            onClick={() => setPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={activePage === totalPages}
        />
    );

    if (activePage !== 1) {
        items.push(firstPage);
    }

    if (activePage > 1) {
        items.push(prevPage);
    }

    if (activePage > 3) {
        items.push(ellipsis);
    }

    for (let number = activePage - 2; number <= activePage; number++) {
        if (number > 0) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => setPage(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
    }

    for (let number = activePage + 1; number < activePage + 3; number++) {
        if (number <= totalPages) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => setPage(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
    }

    if (activePage < totalPages - 2) {
        items.push(ellipsis);
    }

    if (activePage < totalPages) {
        items.push(nextPage);
    }

    if (activePage !== totalPages) {
        items.push(lastPage);
    }

    return <Pagination size="sm">{items}</Pagination>;
};

export default CustomPagination;
