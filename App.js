    // ## Array Cardio Day 2

    const people = [
        { name: 'Abe', year: 1988 },
        { name: 'Sav', year: 1986 },
        { name: 'Monique', year: 1970 },
        { name: 'David', year: 2015 }
      ];
  
      const comments = [
        { comment: 'Love this!', id: 523423 },
        { comment: 'Super good', id: 823423 },
        { comment: 'You are the best', id: 2039842 },
        { comment: 'Ramen is my fav food ever', id: 123523 },
        { comment: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19?
      // const is_At_Least_19 = people.some(function(person) {
      //   const currentYear = (new Date()).getFullYear();
      //   if(currentYear - person.year >= 19) {
      //     return true;
      //   }
      // });
  
      const is_At_Least_19 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
  
      console.log({is_At_Least_19});
      // Array.prototype.every() // is everyone 19?
  
      const is_Everyone_19 = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
      console.log({is_Everyone_19});
  
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
  
  
      const comment = comments.find(comment => comment.id === 823423);
  
      console.log(comment);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const index = comments.findIndex(comment => comment.id === 823423);
      console.log({index});
  
      // comments.splice(index, 1);
  
      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];  