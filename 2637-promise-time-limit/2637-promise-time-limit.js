var timeLimit = function(fn, t) {
	return async function(...args) {
        const timeout = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("Time Limit Exceeded");
          }, t);
        });

        try {
          return await Promise.race([fn(...args), timeout]);
        } catch (err) {
          throw err;
        }
    }
};