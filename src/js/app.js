const alarmColor = function (profile) {
  const { health } = profile;
  if (health < 100 && health > 30) {
    return 'wounded';
  } if (health <= 30) {
    return 'critical';
  }
  return 'healthy';
};

export default alarmColor;

alarmColor({ name: 'Маг', health: 90 });
