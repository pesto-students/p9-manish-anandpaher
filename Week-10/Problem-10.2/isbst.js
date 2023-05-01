function isValidBST(
    root,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER
  ) {
    if (!root) return true;
  
    if (root.val <= min || root.val >= max) return false;
  
    return (
      isValidBST(root.left, min, root.val) &&
      isValidBST(root.right, root.val, max)
    );
  }
  
  let root = {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };
  
  console.log(isValidBST(root));