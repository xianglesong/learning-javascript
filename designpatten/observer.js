/**
 * Created by rollin on 17/1/24.
 */
var Subject = function () {
    var observers = [];

    return {
        subscribeObserver: function (observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
               observers[index].notify(index);
            }
        },
        notifyAllObservers: function () {
            for (var i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
            ;
        }
    };
};

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();