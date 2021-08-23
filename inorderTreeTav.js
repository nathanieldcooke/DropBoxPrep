var inorderTraversal = function (root) {

    const order = []

    const inner = (root) => {
        if (!root) return [];

        if (root.left) inner(root.left);
        order.push(root.val);
        if (root.right) inner(root.right);
    }

    inner(root)

    return order;
};