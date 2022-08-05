HermanSochi 🌴, [14.07.2022 11:12]
[fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload.data;
            state.searchString = null;
            state.domainFilter = 'Все';
            state.sortBy = 'lastlogon';
            state.sortDirection = 'asc';
            applySearchCriteria(state);

HermanSochi 🌴, [14.07.2022 11:12]
Положил их в массив users

HermanSochi 🌴, [14.07.2022 11:13]
const applySearchCriteria = (state) => {
    if (state.users.length > 0) {
        if (state.searchString === null) {
            state.filteredUsers = Object.assign([], state.users);
            sortUsers(state)
        } else {
            state.filteredUsers = []
            let find = new RegExp(state.searchString, 'i');
            state.users.forEach(item => {
                    let searchitem = '';
                    for (var key in item) {
                        searchitem += ' ' + item[key];
                    }
                    if (searchitem.search(find) !== -1) {
                            state.filteredUsers.push(item);
                    }
            sortUsers(state);
            });
        }
    }
}

HermanSochi 🌴, [14.07.2022 11:14]
B вот тут сформировал filteredUsers, которые потом показывать будешь...

HermanSochi 🌴, [14.07.2022 11:15]
Если экшеном что то положить в  state.searchString то в filteredUsers будут только те юзеры, в полях которых эта строка встретиться...

HermanSochi 🌴, [14.07.2022 11:15]
Щаз, сек, доп фильтры удалю..

HermanSochi 🌴, [14.07.2022 11:19]
В экшене просто добавляешь вызов функции еще раз и все...

HermanSochi 🌴, [14.07.2022 11:19]
Вот так:

HermanSochi 🌴, [14.07.2022 11:19]
setSearchString(state, action) {
            state.searchString = action.payload.searchString;
            applySearchCriteria(state);