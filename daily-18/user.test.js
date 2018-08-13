import axios from 'axios';

jest.mock('axios');

class User {
	setInfo() {
		return 1;
	}

	getInfo() {
		return 1;
	}

	static async getRefreshInfo(uid) {
		return {
			id: uid,
			name: 'Huy',
			age: 23,
			email: 'HuyNT16@fsoft.com.vn'
		};
	}
}

test('should fetch users', () => {
	const resp = {
		data: {
			id: 1,
			name: 'Huy',
			age: 23,
			email: 'HuyNT16@fsoft.com.vn'
		}
	};

	axios.get.mockResolvedValue(resp);

	return User.getRefreshInfo(1).then(user => expect(user).toEqual(resp.data));
});
